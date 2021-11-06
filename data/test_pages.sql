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



update page
set html='<p>Rebuild the remains of human civilization deep underground and take back Earth from alien domination. </p>'
where id=(select id from item where title='Buried Peace');


update item
set des