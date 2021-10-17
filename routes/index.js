const express = require('express');
const router = express.Router();

function add_route(router, path, page_title, page_content){
  router.get(path, (req, res) => {
      console.log(page_content);
    res.render('template', { title: page_title + " - Alexander Farrell", content: page_content})
  })
}

function add_page(page, parent_route = '') {
    let route = `${parent_route}/${page.Path}`
    add_route(router, route, page.Title, `category/${page.Content}`);

    page.Pages.forEach(subpage => {
        add_page(subpage, route);
    })
}

class Page {
  constructor(name, route=name.toLowerCase(), pages=[], title=name) {
    this.Name = name;
    this.Path = route;
    this.Content = `${name.toLowerCase()}.ejs`;
    this.Title = title;
    this.Pages = pages;
  }

  static Create(name, pages=[], route=`${name.toLowerCase()}`, title=name) {
    return new Page(name, route, pages, title);
  }
}

const home = Page.Create("Home", [
    Page.Create("Courses", [
        Page.Create("Prepare"),
        Page.Create("Languages"),
        Page.Create("Ideas"),
        Page.Create("Curriculum"),
        Page.Create("Tutorials"),
        Page.Create("Philosophy"),
        Page.Create("one_hour", [], "one_hour", "One Hour Course"),
        Page.Create("two_hour", [], "two_hour", "Two Hour Course")
    ]),
    Page.Create("Articles"),
    Page.Create("Work", [
        Page.Create("Ordered_Energy"),
        Page.Create("Raise_Triton"),
        Page.Create("Buried_Peace"),
        Page.Create("Void_Money")
    ]),
    Page.Create("About"),
    Page.Create("Privacy"),
    Page.Create("Terms")
], '');

console.log(home);

add_route(router, home.Path, home.Title, `category/${home.Content}`);

home.Pages.forEach(c => {
    add_page(c)
  //add_route(router, c.Path, c.Title, `category/${c.Content}`);
})

module.exports = router;
