use body::Body;
use footer::Footer;
use header::Header;
use yew::prelude::*;

mod body;
mod footer;
mod header;

#[function_component]
fn App() -> Html {
    html! {
        <div
            class={classes!(String::from("bg-dark h-screen w-screen flex items-center justify-center"))}
        >
            <div class={classes!(String::from("flex flex-col justify-between  bg-text w-[calc(100%-4rem)] h-[calc(100%-4rem)] p-8"))}>
                <Header />
                <Body />
                <Footer />
            </div>
        </div>
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}
