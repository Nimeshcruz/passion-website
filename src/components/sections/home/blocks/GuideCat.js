import React from "react";

export default function GuideCat(props) {
    return (
        <nav className="guide-cat w-[60%] hidden lg:block">
            <ul className="flex gap-6">
                {
                    props.cat.map((item, index) => {
                        return(
                            <li key={index} className="cat flex-1">
                                <a className="py-2 pt-[0.65rem] px-4 block rounded-md bg-light-red text-center font-semibold text-black tracking-tight" href={item.url}>{item.title}</a>
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    );
}