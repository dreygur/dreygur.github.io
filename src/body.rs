use crate::components::{footer::Footer, header::Header};
use yew::prelude::*;

#[derive(Properties, PartialEq)]
pub struct Props {
    pub children: Html,
}

#[function_component]
pub fn Body(props: &Props) -> Html {
    html! {
        <div class={classes!(String::from("text-primary"))}>
            <div
                class={classes!(String::from("bg-dark h-screen w-screen flex items-center justify-center"))}
            >
                <div class={classes!(String::from("flex flex-col justify-between bg-text w-[calc(100%-4rem)] h-[calc(100%-4rem)] p-8"))}>
                    <Header />
                        <div>
                            { props.children.clone() }
                        </div>
                    <Footer />
                </div>
            </div>
        </div>
    }
}
