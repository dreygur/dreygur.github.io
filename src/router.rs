use crate::pages::{about::About, contacts::Contacts, home::Home, not_found::NotFound};
use yew::prelude::*;
use yew_router::prelude::*;

#[derive(Clone, Routable, PartialEq)]
pub enum Route {
    #[at("/")]
    Home,
    #[at("/about")]
    About,
    #[at("/contacts")]
    Contacts,
    #[not_found]
    #[at("/404")]
    NotFound,
}

pub fn switch(routes: Route) -> Html {
    match routes {
        Route::Home => html! { <Home /> },
        Route::About => html! { <About /> },
        Route::Contacts => html! { <Contacts /> },
        Route::NotFound => html! { <NotFound /> },
    }
}
