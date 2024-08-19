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
    js?: boolean
    bootstrap?: boolean
    tailwind?: boolean

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
            <div className="flex items-center justify-center">
                {props.python && (
                    <Image
                        className="m-2"
                        src="/python-logo-only.svg"
                        height={20}
                        width={20}
                        alt="Python"
                    />
                )}
                {props.php && (
                    <Image
                        className="m-2"
                        src="/php-svgrepo-com.svg"
                        height={20}
                        width={30}
                        alt="PHP"
                    />
                )}
                {props.js && (
                    <Image
                        className="m-2"
                        src="/js.svg"
                        height={20}
                        width={30}
                        alt="JS"
                    />
                )}
                {props.nextjs && (
                    <Image
                        className="m-2 "
                        src="/nextjs2.png"
                        height={10}
                        width={30}
                        alt="NextJS"

                    />
                )}
                {props.fastapi && (
                    <Image
                        className="m-2 "
                        src="/fastapi2.png"
                        height={20}
                        width={30}
                        alt="FastAPI"
                    />
                )}
                {props.mongodb && (
                    <Image
                        className="m-2 "
                        src="/mongodb.svg"
                        height={10}
                        width={30}
                        alt="mongodb"
                    />
                )}
                {props.mariadb && (
                    <Image
                        className="m-2 "
                        src="/mariadb2.png"
                        height={30}
                        width={50}
                        alt="mariadb"
                    />
                )}
                {props.bootstrap && (
                    <Image
                        className="m-2 "
                        src="/Bootstrap_logo.svg"
                        height={10}
                        width={30}
                        alt="bootstrap"
                    />
                )}
                {props.tailwind && (
                    <Image
                        className="m-2 "
                        src="/tailwind.png"
                        height={10}
                        width={30}
                        alt="tailwind"
                    />
                )}
                {props.css && (
                    <Image
                        className="m-2 "
                        src="/css.svg"
                        height={10}
                        width={30}
                        alt="css"
                    />
                )}

            </div>

            <div>
                {props.text}

            </div>
        </div>

    );
}