import { Pool } from "pg";

export let Data: Database = null;

export function SetupDatabaseDevelopment(config) {
    Data = new Database(Database.ConstructUri(
        config.database.username,
        config.database.password,
        config.database.host,
        config.database.port,
        config.database.database
    ));
}

export function SetupDatabaseProduction() {
    Data = new Database(
        process.env.DATABASE_URL,
        false
    )
}

class Database {
    public Pool: Pool;

    constructor(url: string, rejectUnauthorized: boolean = true) {
        // this.Pool = new Pool({
        //     user: process.env.DATABASE_USERNAME || config.database.username,
        //     password:process.env.DATABASE_PASSWORD || config.database.password,
        //     host: process.env.DATABASE_HOST || config.database.host,
        //     port: process.env.DATABASE_PORT || config.database.port,
        //     database: process.env.DATABASE_DATABASE || config.database.database
        // })
        this.Pool = new Pool({
            connectionString: url,
            ssl: {
                rejectUnauthorized
            }
        })
    }

    public static ConstructUri(
        username:   string,
        password:   string,
        host:       string,
        port:       string,
        database:   string): string
    {
        return `postgres://${username}:${password}@${host}:${port}/${database}`;
    }

    public async TryGet(res, error_message="Error retrieving data from server.",  sql, ...args) {
        try {
            res.json((await this.Query(sql, args)).rows);
        } catch (e) {
            res.status(500).json({message: error_message});
        }
    }

    public async TrySet(res, error_message="Error sending data to server.",  sql, ...args) {
        try {
            await this.Execute(sql, args)
            res.sendStatus(200);
        } catch (e) {
            res.status(500).json({message: error_message});
        }
    }

    public async Query(sql, ...args) {
        try {
            return await this.Pool.query(sql, args);
        } catch (e) {
            console.error("Database Error: " + e.message);
            throw new Error("Unable to retrieve data from database");
        }
    }

    public async Execute(sql, ...args) {
        try {
            await this.Pool.query(sql, args);
        } catch (e) {
            console.error("Database Error: " + e.message);
            throw new Error("Unable to retrieve data from database");
        }
    }
}