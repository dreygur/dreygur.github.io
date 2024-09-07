use router::{switch, Route};
use yew::prelude::*;
use yew_router::prelude::*;

mod body;
mod components;
mod pages;
mod router;

#[function_component]
fn App() -> Html {
    html! {
        <BrowserRouter>
        <Switch<Route> render={switch} />
        </BrowserRouter>
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}
