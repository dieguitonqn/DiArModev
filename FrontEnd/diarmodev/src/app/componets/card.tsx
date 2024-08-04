import Image from "next/image"


interface Props {
    source: string
    alt: string
    text: string
    titulo: string
    python?: boolean
    php?: boolean
    css?: boolean
    mongodb?: boolean
    mariadb?: boolean
    nextjs?: boolean
    fastapi?: boolean

}
export default function Card(props: Props) {
    return (
        <div className="max-w-80 justify-center items-center flex flex-col m-4">
            <div className="text-2xl">
                {props.titulo}
            </div>
            <Image
                src={props.source}
                alt={props.alt}
                width={400}
                height={400}
            />
            <div className="flex">
                <Image
                    className="m-2"
                    src="/python-logo-only.svg"
                    height={20}
                    width={20}
                    alt="py"
                />
                <Image
                    className="m-2"
                    src="/php-svgrepo-com.svg"
                    height={20}
                    width={20}
                    alt="py"
                />
                <Image
                    className="m-2"
                    src="/js.svg"
                    height={20}
                    width={20}
                    alt="py"
                />
                <Image
                    className="m-2 bg-slate-200"
                    src="/nextjs.svg"
                    height={20}
                    width={20}
                    alt="py"
                />

            </div>

            <div>
                {props.text}

            </div>
        </div>

    );
}