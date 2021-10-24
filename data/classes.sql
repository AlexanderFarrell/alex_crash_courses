call add_course_class('Embark', 'Begin your journey with programming!', '');
call add_course_class('Fundamentals',
                      'Learn foundational concepts behind most programming languages. (Coming soon online)', '');
call add_course_class('Concepts', 'Dive deeper after grasping the fundamentals. (Coming soon online)', '');
call add_course_class('Clients', 'Build applications a person can interact with! (Coming soon online)', '');
call add_course_class('Servers', 'Connect applications and devices together! (Coming soon online)', '');
call add_course_class('Databases',
                      'Powerfully add, remove, update, retrieve, organize, standardize and display data. (Coming soon online)',
                      '');
call add_course_class('Games',
                      'Create video games! Understand how they work. Get code to help you along! (Coming soon online)',
                      '');

truncate item cascade;

create or replace view deep_class as
(
select c.title,
       c.description,
       row_to_json(select json_agg((select i.title, i.description
                                    from item i
                                    where i.id = (
                                        select item_id_two
                                        from item_item_link
                                        where item_id_one = c.id
                                    ))))
--        row_to_json((select i.title, i.description
--               from item i
--               where i.id = (
--                   select item_id_two from item_item_link where item_id_one = c.id)))
from item c
where c.item_type = 'class');


call add_unit('Getting Started', 'Let''s get started!', '', 'Embark');


call add_unit(
        'Numbers and text.',
        'How can we do math? Or work with text?',
        '',
        'Fundamentals');
call add_unit(
        'Flow',
        'How can we make decisions, repeat something, or do something specific?',
        '',
        'Fundamentals'
    );
call add_unit(
        'Collections',
        'Can we keep lists of things? Can we name things? Can we keep things unique?',
        '',
        'Fundamentals'
    );

call add_unit(
        'Types',
        'How can we have different types of things, such as numbers, text, buttons, houses, weather, maps, etc?',
        '',
        'Fundamentals'
    );

call add_unit(
        'Modules',
        'Can I reference code in other files?',
        '',
        'Fundamentals'
    );

call add_unit(
        'File I/O',
        'Can I save something more permanently so I can access it later?',
        '',
        'Fundamentals'
    );

select *
from item_item_link;

select *
from item
where item_type = 'unit';

delete
from item
where item_type = 'unit';

delete from item
    where item_type = 'lesson';


(select count('any') from item where title = 'Get Started' limit 1);

call add_lesson('Begin Your Journey',
    'Let''s begin our courses',
    'Getting Started',
    '<h1>Welcome!</h1>
<p>The first courses will take you through several of the fundamentals of programming.</p>
<hr>
<h3>Concepts</h3>
<p>Many languages have similar concepts.</p>
<p>By learning these concepts: </p>
<ul>
    <li>One can understand different languages faster</li>
    <li>One can learn programming easier</li>
    <li>One can better communicate with those with different programming backgrounds.</li>
    <li>One can gain a deeper understanding of how software works.</li>
    <li>One can gain more insight in designing software</li>
    <li>One can gain more insight in planning software</li>
</ul>
<hr>
<p>We will start with Python.</p>
<p>Later, we will show these concepts with Python and JavaScript alongside one another. </p>');

call add_lesson('Set Up',
    'Getting everything set up for programming.',
                'Getting Started',
    '<h1>Set Up</h1>
<p>To start with Python, I recommend an online editor.</p>
<hr>
<p>Online editors let you try or use Python without installing anything. </p>
<a target="_blank" rel="noopener noreferrer"  href="https://wiki.python.org/moin/PythonEditors#Online_Editors">A list of online editors can be found on the official Python wiki. Choose the one you like!</a>
<hr>
<p>An IDE (Integrated Development Environment) lets you write code and run it from your device.</p>
<p>You may also install an IDE of your choosing</p>
<a target="_blank" rel="noopener noreferrer"  href="https://wiki.python.org/moin/IntegratedDevelopmentEnvironments">IDEs listed on the official Python wiki. Choose the one you like.</a>
<p>I personally use PyCharm, but I am not sponsoring it here. This is just my personal preference.</p>');

call add_lesson('Your First Program',
    'Write your first program and dive into code.',
                'Getting Started',
    '<h1>First Program</h1>
<p>Let''s start with our first program!</p>
<hr>

<p>Type the code below into your editor. Try to avoid coping and pasting for now; typing it out will help to learn faster!</p>
<pre><code>message = "Hello world!"
        print(message)</code></pre>

<hr>
<p>Your editor likely has a run button. It may look like a play button on a TV remote (something like this ▶️)</p>
<p>Verify you see the following output:</p>
<pre><code>Hello world!</code></pre>
<hr>
<p>Your program displayed text when you ran it.</p>
<p>Let''s break down everything going on. Don''t worry if you don''t remember right away, we will go over these in future lessons.</p>
<pre><code>message</code></pre>
<ul>
    <li>We make a variable named <span style="color: cyan;">message</span>.</li>
    <li>To the right, we have text in quotes (we call text a string), which we put in quotes <span style="color: cyan;">"Hello world!"</span>.</li>
    <li><span style="color: cyan;">message</span> will hold this text (string) for us. <span style="color: cyan;">message = "Hello world!"</span>.</li>
    <li>We "print" the message. The program tells the computer to type our variable <span style="color: cyan;">message</span> for us into the console. <code>print(message)</code></li>
</ul>
<p>This program is a console application. A console outputs text to the user.</p>
<p>There are other kinds of programs, such as servers, applications, scripts on web pages, etc. We will start in the console for now.</p>
<hr>
<h2>Exercise 1</h2>
<p>Let''s change the text!</p>
<p>We will only change what is inside the quotes. Try this first:</p>
<pre><code>message = "Good morning!"
        print(message)</code></pre>
<p>If you run the program, the following output should appear:</p>
<pre><code>Good Morning!</code></pre>
<hr>
<p>Notice that we only changed the first line. </p>
<code>message = "Good morning!"</code>
<br>
<p>The second line stayed the same </p>
<code>print(message)</code>
<br>
<p>We did not have to re-write the entire program for it to print a different message.</p>
<hr>
<h2>Exercise 2</h2>
<p>Let''s change the name of the variable!</p>
<p>Try this:</p>
<pre><code>a = "Good morning!"
        print(a)</code></pre>
<p>If you run the program, the following output should appear:</p>
<pre><code>Good Morning!</code></pre>
<hr>
<p>We can name variables different things for our needs. </p>
<p>Variables in Python should be lowercase. </p>
<p>You also cannot use spaces. I recommend using underscores _ instead</p>
<p>A couple examples:</p>
<ul>
    <li><code>a_number</code></li>
    <li><code>some_text</code></li>
    <li><code>a_really_long_variable_name</code></li>
</ul>
<p>We will learn more about variables in the next lesson</p>
');

call add_lesson('Variables',
    'How do I store & name data?',
                'Numbers and text.',
    '<h2>Variables</h2>
<p>A variable holds data for us!</p>
<pre><code>a = 15</code></pre>
<hr>
<p>We can have many variables</p>
<pre><code>a = 15
b = 20
c = 30
print(b)</code></pre>
<p>The output of this code is:</p>
<pre><code>20</code></pre>
<p><strong>Notice it printed 20</strong>, because b is 20.</p>
<p>The variables a and c exist, but we don''t do anything with them!</p>
<hr>
<h3>Naming Variables</h3>
<p>We have a lot of flexibility with naming variables</p>
<ul>
    <li><code>hello = 15</code></li>
    <li><code>alex = 15.475</code></li>
    <li><code>some_text = "Hello there!"</code></li>
    <li><code>a = 10</code></li>
    <li><code>b = 9</code></li>
    <li><code>c = 80</code></li>
</ul>
<hr>
<h3>Naming Rules</h3>
<p>Some rules for naming in Python</p>
<ul>
    <li>variables should be lowercase</li>
    <li>We cannot use spaces. Use_an_underscore_instead.</li>
    <li>Avoid punctuation.!? And avoid symbols&^@%#</li>
    <li>Avoid numbers4564. May still work, but there are specific cases where they don''t.</li>
</ul>
<hr>
<h2>Setting Variables</h2>
<p>We can set variables to whatever we like. </p>
<ul>
    <li><code>a = 15</code></li>
    <li><code>a = 15.475</code></li>
    <li><code>a = "Hello there!"</code></li>
    <li><code>a = 0</code></li>
    <li><code>a = None</code></li>
    <li><code>a = "Some more text!"</code></li>
</ul>
<hr>
<h3>Types</h3>
<p>There are many different kinds of data. We call these types.</p>
<div class="TwoColumn" style="grid-gap: 20px">
    <div style="text-align: right">One kind of number</div>
    <div><code>a = 15</code></div>
    <div style="text-align: right">Another kind of number</div>
    <div><code>a = 1.0</code></div>
    <div style="text-align: right">A kind of text</div>
    <div><code>a = "My name is Alex"</code></div>
</div>
<p>We will learn more about types in a future lesson.</p>
<p>However, we will go over these 3 types right now!</p>
<hr>
<h3>Numbers</h3>
<p>Let''s discuss two different kinds of numbers:</p>
<ul>
    <li>Those <strong>with</strong> a decimal</li>
    <li>Those <strong>without</strong> a decimal</li>
</ul>
<hr>
<h3>Two Types of Numbers</h3>
<p>In programming, these have names</p>
<div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-gap: 15px; text-align: center">
    <div><strong>&nbsp;</strong></div>
    <div><strong>Name</strong></div>
    <div><strong>Short Name</strong></div>
    <div><strong>Example</strong></div>
    <div>No decimal</div>
    <div>Integer</div>
    <div>int</div>
    <div>256</div>
    <div>Decimal</div>
    <div>Floating Point</div>
    <div>float</div>
    <div>82.956</div>
</div>
<hr>
<h2>Integer</h2>
<p>Here is a variable set to an integer</p>
<pre><code>a = 15</code></pre>
<hr>
<h2>Float</h2>
<p>Here is a variable set to a float</p>
<pre><code>a = 89.15268</code></pre>
<hr>
<h2>More on Floats</h2>
<p>Sometimes a float has 0s at the end. That is okay! We may need decimals later.</p>
<p>If this is the case, indicate this.</p>
<pre><code>a = 1<span style="color: red">.0</span></code></pre>

<hr>
<h2>Strings</h2>
<p>Text in programming is called a string.</p>
<pre><code>a = "What would you like to do?"</code></pre>
<hr>
<h2>Example</h2>
<p>For the following code:</p>
<pre><code>a_number = 15
a_string = "My name is Alex"

print(a_number)</code>
</pre>
<br>
<p>We have the following output:</p>
<pre><code>15</code></pre>
<hr>
<p>Next we will learn about math.</p>');


call add_lesson(
    'Math',
    'How do I perform addition, subtraction, etc.?',
    'Numbers and text.',
    '<h1>Math</h1>
<p>In programming, we can perform math.</p>
<hr>
<h2>What we can do</h2>
<p>Here''s five different things we can do to start.</p>
<ul>
    <li>Adding</li>
    <li>Subtracting</li>
    <li>Multiplying</li>
    <li>Dividing</li>
    <li>Getting the Remainder</li>
</ul>
<hr>
<h2>Adding</h2>
<p>We add a and b together and set it to c.</p>
<pre><code>a = 10
b = 5
c = a + b</code></pre>
<p>c becomes 15</p>
<p>The variables a and b are unchanged here! a is still 10 and b is still 5.</p>
<hr>
<h2>Subtracting</h2>
<p>c is a minus b</p>
<pre><code>a = 10
b = 5
c = a - b</code></pre>
<p>c will be 5</p>
<p>a and b remain unchanged.</p>
<hr>
<h2>Multiplying</h2>
<p>c will be a times b</p>
<p>We use an asterisk for a multiplication symbol *</p>
<pre><code>a = 10
b = 5
c = a * b</code></pre>
<p>c will be 50</p>
<hr>
<h2>Dividing</h2>
<p>We divide a by b</p>
<p>We set c as the result</p>
<pre><code>a = 10
b = 5
c = a / b</code></pre>
<p>The answer will be 2</p>
<p><i>Optional Note: Python 2 and Python 3 are different with integers. Python 3 will convert to a float when needed, such as when doing 5 / 2, the result will be 2.5. In Python 2, the result will round down and be 2, only when they are integers.</i></p>
<hr>
<h2>Getting the Remainder (Modulo)</h2>
<p>In programming, we call a remainder a modulo. </p>
<p>We use the percent sign % to get a modulo.</p>
<pre><code>a = 9
b = 5
c = a % b</code></pre>
<p>The result is 4. We can get one 5 out of 9, but then we are left with 4.</p>
<hr>
<h3>Literals</h3>
<p>We don''t have to use variables. We can just use a literal</p>
<pre><code>a = 9
c = a * 6</code></pre>
<p>In this case, 6 is a literal</p>
<hr>
<h3>More Literals</h3>
<p>We don''t need to set a variable for everything!</p>
<pre><code>
c = 9 * 6</code></pre>
<hr>
<h3>No Variables</h3>
<p>We can use nothing but literals if we wish</p>
<pre><code>
print(9 * 6)</code></pre>
<hr>
<h3>Literals vs Variables</h3>
<p>Both are useful. </p>
<hr>
<p>Variables let us change the value later</p>
<pre><code>
a = 5
a = a + 9
print(a)</code></pre>
<hr>
<p>Variables are useful for when needed all over the place</p>
<pre><code>
app_name = "Awesome Game"
version = "1.0"

print(app_name)
print(version)

print("Loading...")
print(app_name)
print(" is now loaded!")</code></pre>

<p>With variables, if I don''t like the name of the game, I can change it in one place. With literals, I''d have to change it everywhere.</p>
<p>It doesn''t just take more time, it''s also more susceptible to human error.</p>
<hr>
<p>Literals are helpful when we use them once, and they never change when the program is running.</p>
<pre><code>
a = 100
a = a / 2
print(a)</code></pre>
<hr>

<h1>Exercise</h1>
<p>Let''s start off with two variables, which we will name a and b</p>
<pre><code>a = 50</code></pre>
<pre><code>b = 40</code></pre>
<hr>
<p>To add these together, we can do the following</p>
<pre><code>a + b</code></pre>
<hr>
<p>We add them but we don''t do anything with it</p>
<p>Let''s set it to a variable</p>
<pre><code>c = a + b</code></pre>
<p>c would now equal 90</p>
<hr>
<p>Let''s print c</p>
<pre><code>print(c)</code></pre>
<p>The output should be 90</p>
<pre><code>90</code></pre>
<hr>
<h3>Review</h3>
<p>Here is a list of different math operations we can do:</p>
<div class="TwoColumn" style="grid-column-gap: 2em; grid-row-gap: 3em">
    <p style="text-align: right">Add</p>
    <pre><code>a + b</code></pre>
    <p style="text-align: right">Subtract</p>
    <pre><code>a - b</code></pre>
    <p style="text-align: right">Multiply</p>
    <pre><code>a * b</code></pre>
    <p style="text-align: right">Divide</p>
    <pre><code>a / b</code></pre>
    <p style="text-align: right">Remainder (which in programming we call a Modulo)</p>
    <pre><code>a % b</code></pre>
</div>
'
    );


call add_lesson(
    'Comments',
    'Can I write text the computer will ignore for my own reference?',
    'Numbers and text.',
    '
<h1>Comments</h1>
<p>Comments let us write in our code.</p>
<pre><code># This is a comment</code></pre>
<hr>
<p>Comments are ignored when you run the program.</p>
<pre><code>a = 8
# a += 2
print(a)</code></pre>
<p>Output: 8</p>
<p>The line a += 2 was ignored!</p>
<hr>
<p>We can use comments for all sorts of things</p>
<pre><code># Author: Alex</code></pre>
<pre><code># Author: Alex</code></pre>
<hr>'
    );

