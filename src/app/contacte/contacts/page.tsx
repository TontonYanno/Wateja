import React from "react";
import Link from "next/link";


type Props = {}

export default function page({}: Props) {
    return (
        <div className="mt-2" >

            <header className="flex between" >
            <h1> Liste des Contacts </h1>

            <Link className="btn-link" href={"/contacte/add-contact"} >
                Ajouter un contact 
            </Link>


            </header>

        </div>
    )
}