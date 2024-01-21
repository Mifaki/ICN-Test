
type QuotesProps = {
    text: string
    author: string
}

const Quotes = ({
    text,
    author
}: QuotesProps) => {
    return (
        <div className="relative flex items-start">
            <div className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-orange-600 to-yellow-500" />
            <div className="w-full bh-fit flex flex-col gap-4 ml-5 p-6 bg-[#F8F8F8] rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.3841 4.47302C7.15093 11.045 1.46597 18.6939 0.329176 27.4202C-1.44056 41.0051 10.7081 47.6545 16.8636 41.68C23.0192 35.7057 19.3293 28.1224 14.8721 26.0495C10.4148 23.9766 7.68904 24.6986 8.16451 21.9286C8.63998 19.1585 14.9813 11.4785 20.5524 7.90176C20.9221 7.58745 21.0627 6.97758 20.7068 6.51502C20.4727 6.21063 20.0135 5.61391 19.3293 4.72462C18.731 3.94699 18.1578 3.97608 17.3841 4.47302Z" fill="#A9ACAF" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M44.3173 4.47302C34.0843 11.045 28.3993 18.6939 27.2625 27.4202C25.4928 41.0051 37.6415 47.6545 43.797 41.68C49.9526 35.7057 46.2627 28.1224 41.8055 26.0495C37.3482 23.9766 34.6223 24.6986 35.0979 21.9286C35.5734 19.1585 41.9147 11.4785 47.4858 7.90176C47.8555 7.58745 47.9961 6.97758 47.6401 6.51502C47.4061 6.21063 46.9469 5.61391 46.2627 4.72462C45.6644 3.94699 45.0912 3.97608 44.3173 4.47302Z" fill="#A9ACAF" />
                </svg>
                <p className="font-inter text-base italic text-[#43464D] leading-8 tracking-[0.16px]">{text}</p>
                <p className="font-inter text-base italic text-[#43464D] leading-8 tracking-[0.16px]">- {author}</p>
            </div>
        </div>
    )
}

export default Quotes