call add_page('Test', 'This works!', '<p>This is a test of a publication page.</p><p>Hopefully this works!</p>', 'page');

call add_page('Buried Peace', '', '<h1>Buried Peace</h1>
<p>Rebuild the remains of human civilization deep underground and take back Earth from alien domination. </p>', 'page');

call add_page('Fractals', '', '<style>
    img {
        border-radius: 18px;
    }
</style>
<br>
<h3>Necklace</h3>
<img src="/images/fractal.jpg">
<br>
<h3>Potential</h3>
<img src="/images/fractal2.jpg">
<br>
<h3>Aquamarine</h3>
<img src="/images/fractal3.jpg">
<br>
<h3>Underwater Lightning</h3>
<img src="/images/fractal4.jpg">
<br>
<h3>Deep Coral</h3>
<img src="/images/fractal6.jpg">
<br>
<h3>Magma</h3>
<img src="/images/fractal7.jpg">
<br>
<h3>Motion in Stillness</h3>
<img src="/images/fractal8.jpg">
<br>
<h3>Slate</h3>
<img src="/images/fractal9.jpg">
<br>
<h3>Without Water</h3>
<img src="/images/fractal10.jpg">
<br>
<h3>Uncharted, Endless Forest</h3>
<img src="/images/fractal11.jpg">', 'page');

call add_page('Void Money', '', '');

call add_page('Space', '', '<style>
    img {
        border-radius: 18px;
    }
</style>

<h3>Mirandan Sky</h3>
<img src="/images/space1.jpg">
<br>
<h3>Ganymedian Sky</h3>
<img src="/images/space2.jpg">
<br>
<h3>Titanian Sky</h3>
<img src="/images/space3.jpg">
<br>
<h3>Tritonian Sky</h3>
<img src="/images/space4.jpg">
<br>', 'page');


delete from page where page.id=(select id from item where title='Fractals');

delete from item where title='Game List';

update page
set html='<p>Rebuild the remains of human civilization deep underground and take back Earth from alien domination. </p>'
where id=(select id from item where title='Buried Peace');


update item
set description='Rebuild the remains of human civilization deep underground and take back Earth from alien domination.'
where title='Buried Peace';

update item
set description='Various fractals'
where title='Fractals';

update item
set description='Gas Giant Skies'
where title='Space';




select * from item where title='Game List';

call add_page('Games', 'Games which I have created', '<p>Games</p>', 'page');
call add_page('Programming', 'Programming articles', '<p>Programming Articles</p>', 'page');
call add_page('Game Development', 'Articles on Game Development', '<p>Game Development Articles</p>', 'page');
call add_page('Journal', 'My Public Journal', '<p>My Public Journal</p>', 'page');
call add_page('Art', 'Art which I have created, or in general', '<p>Art</p>', 'page');


select * from pages where title='Games';

update page
set html='<div class="StretchWidth">
    <a href="/pub/Ordered Energy">
        <div class="ImageItem TwoColumn" style=''width: 100%; font-size: 1.2rem; background-image: url("/images/games/oe.jpg")''>
            <div style="align-self: end; text-align: left">
                <span style="color: #e1ff8e">Strategize</span> and Succeed
            </div>
            <div style="align-self: end; text-align: right">
                <img class="low_marble" src="/images/marbles/low/Somelow.png">
                Ordered Energy
            </div>
        </div>
    </a>
    <div class="Adapt3r Products">
        <a href="/pub/Void Money">
            <div class="ImageItem Product" style=''background-image: url("/images/games/vm.jpg")''>
                <div>Conduct <span style="color: yellow">Business</span></div>
                <div><img class="low_marble"   src="/images/marbles/low/VoidMoney2low.png"> Void Money</div>
            </div>
        </a>
        <a href="/pub/Buried Peace">
            <div class="ImageItem Product" style=''background-image: url("/images/games/buried.jpg")''>
                <div><span class="accent_dark">Recapture</span> the Surface</div>
                <div><img class="low_marble"  src="/images/marbles/low/dlow.png"> Buried Peace</div>
            </div>
        </a>
        <a href="/pub/Raise Triton">
            <div class="ImageItem Product" style=''background-image: url("/images/games/warp.jpg")''>
                <div><span style="color: #026aff">Conquer</span> the Under Ocean</div>
                <div><img class="low_marble"  src="/images/marbles/low/clow.png"> Raise Triton</div>
            </div>
        </a>
        <a href="/pub/YouCannotBeatThisGame">
            <div class="ImageItem Product" style=''background-image: url("/images/games/you.jpg")''>
                <div><span style="color: #ff9102">Dive</span> into Chaos</div>
                <div style="font-size: 0.9rem"><img class="low_marble"  src="/images/marbles/low/ycbtglow.png"> You Cannot Beat This Game</div>
            </div>
        </a>
    </div>
    <!--<div class="ThreeColumn">-->
    <!--    <iframe src="https://onedrive.live.com/embed?cid=96F3040C0D2086E9&resid=96F3040C0D2086E9%21142175&authkey=ADvdBnOnUyXmtC4" width="165" height="128" frameborder="0" scrolling="no"></iframe>-->
    <!--</div>-->
</div>

'
where item_id = (select id from item where title = 'Games');


call add_page('YouCannotBeatThisGame', 'A game where one fights deep underneath the icy surface.', '<h1>
    You Cannot Beat This Game
</h1>
<p>Or maybe you can! I make no guarantees.</p>
<p>This was one of my very first games published. I keep it here for archive purposes, but you are more than welcome to play it! Published circa 2007. Dive deep down into the unknown. Fight monsters deep below the icy surface. Secret levels at the end if you can succeed.</p>
<h2>System Requirements</h2>
<p>This game may not be compatible with modern hardware as it is quite older. It was developed only for Windows machines. Unfortunately, I do not have the project file as my hard-drive failed and needed to be formatted. But the online playable build survived! </p>',
    'page');


update page
set html='<br>
<h1>
    You Cannot Beat This Game
</h1>
<p>Or maybe you can! I make no guarantees.</p>
<p>This was one of my very first games published. I keep it here for archive purposes, but you are more than welcome to play it! Published circa 2007. Dive deep down into the unknown. Fight monsters deep below the icy surface. Secret levels at the end if you can succeed.</p>
<div class="TwoColumn">
    <img style="width: 100%" src="/images/games/you.jpg">
    <img style="width: 100%" src="/images/games/youcannot.jpg">
</div>
<h2>Download</h2>
<div style="background-color: #000031">
    <a href="https://1drv.ms/u/s!AumGIA0MBPOWiNZfCxNjyg_bkB_RNw?e=fxGX9x" style="place-self: center">
        <div class="ImageItem Product" style=''background-image: url("/images/games/you.jpg")''>
            <div><span style="color: #ff9102">Download From OneDrive</span></div>
            <div style="font-size: 0.9rem"><img class="low_marble"  src="/images/marbles/low/ycbtglow.png"> You Cannot Beat This Game</div>
        </div>
    </a>
</div>
<h2>System Requirements</h2>
<p>This game may not be compatible with modern hardware as it is quite older. It was developed only for Windows machines. Unfortunately, I do not have the project file as my hard-drive failed and needed to be formatted. But the online playable build survived! </p>
'
where item_id=(select id from item where title='YouCannotBeatThisGame');



call add_page('Ordered Energy', '', '
<iframe src="https://itch.io/embed-upload/2953291?color=320000" allowfullscreen="" width="100%" height="70vw" frameborder="0"><a href="https://morphsight.itch.io/orderedenergy">Play Ordered Energy on itch.io</a></iframe>
<h1>Ordered Energy</h1>
<p>Battle with up to 4 teams against the forces of nature. Play for free in the browser on PC or Mac with Keyboard and Mouse.</p>
<iframe src="https://itch.io/embed/805506?bg_color=001767&amp;fg_color=ffffff" width="100%" height="100%" frameborder="0"><a href="https://morphsight.itch.io/orderedenergy">Ordered Energy by MorphSight</a></iframe>
<h2>Screenshots</h2>
<div class="Adapt3r">
    <img src="/images/oe.jpg">
    <img src="/images/oe2.jpg">
    <img src="/images/oe3.jpg">
</div>
<p>Ordered Energy is Copyright 2020 by MorphSight LLC</p>', 'page');

update page
set html='<div class="StretchWidth" style="padding-left: 10px; padding-right: 10px">
    <iframe src="https://itch.io/embed-upload/2953291?color=320000" allowfullscreen="" width="100%" height="800px" frameborder="0"><a href="https://morphsight.itch.io/orderedenergy">Play Ordered Energy on itch.io</a></iframe>
    <h1>Ordered Energy</h1>
    <p>Battle with up to 4 teams against the forces of nature. Play for free in the browser on PC or Mac with Keyboard and Mouse.</p>
    <iframe src="https://itch.io/embed/805506?bg_color=001767&amp;fg_color=ffffff" frameborder="0"><a href="https://morphsight.itch.io/orderedenergy">Ordered Energy by MorphSight</a></iframe>
    <h2>Screenshots</h2>
    <div style="width: 100%">
        <img style="width: 100%" src="/images/games/oe.jpg">
        <img  style="width: 100%" src="/images/games/oe2.jpg">
        <img style="width: 100%" src="/images/games/oe3.jpg">
    </div>
    <p>Ordered Energy is Copyright 2020 by MorphSight LLC</p>
</div>
'
where item_id=(select id from item where title='Ordered Energy');