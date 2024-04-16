import Link from "next/link";

interface NavBarProps {
    active: "home" | "alunos" | "professores"
}

export default function NavBar(props: NavBarProps) {
    const active = props.active
    const activeClass = "border-b-4 pb-4 border-pink-600"

    return (
        <nav className="flex bg-slate-900 w-full justify-between items-center px-6 py-4">
            <h1 className="text-3xl font-bold">Finanças Pro</h1>
            <ul className="flex gap-6">
                <li className={active == "home" ? activeClass : ""} >
                    <Link href="/">home</Link>
                </li>
                <li className={active == "alunos" ? activeClass : ""} >
                    <Link href="/movimentacoes">alunos</Link>
                </li>
                <li className={active == "professores" ? activeClass : ""}>
                    <Link href="/categorias">professores</Link>
                </li>
            </ul>
            <div className="w-14 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/300" alt="avatar do usuário" />
            </div>
        </nav>
    )
}