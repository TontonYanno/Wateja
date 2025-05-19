import { headers } from "next/headers";
import React from "react";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
    return(
        <header className="navbar">
            <Link href={"/"} className="btn-link">
                <h4> Wateja</h4>
            </Link>
        </header>
    );
}
