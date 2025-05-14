import { SceneItem } from "scenejs";
import { useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
    useEffect(() => {
        const Text = new SceneItem(

            {
                attribute: {
                    "data-text": [
                        "",
                        "L",
                        "Li",
                        "Lif",
                        "Life",
                        "Life ",
                        "Life h",
                        "Life ha",
                        "Life has",
                        "Life has ",
                        "Life has n",
                        "Life has no",
                        "Life has no ",
                        "Life has no c",
                        "Life has no ct",
                        "Life has no ctr",
                        "Life has no ctrl",
                        "Life has no ctrl ",
                        "Life has no ctrl +",
                        "Life has no ctrl + ",
                        "Life has no ctrl + z"
                    ],
                },
            },
            {
                duration: 6,
                selector: ".text",
                iterationCount: 1,
                fill: "forwards",
            }
        );

        Text.play();

        return () => {
            Text.stop();
            Text.destroy();
        };
    }, []);

    return (
        <div className="Header_container">

            <div className="text" data-text=""></div>
        </div>
    );
};

export default Header;
