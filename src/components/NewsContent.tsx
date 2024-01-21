
type NewsContentProps = {
    heading?: string
    firstContent?: string
    children?: React.ReactNode
    secondContent?: string
}

const NewsContent = ({
    heading,
    firstContent,
    children,
    secondContent
}: NewsContentProps) => {
    return (
        <>
            <div>
                {heading && (
                    <h2 className='destkop-h2 mb-2'>{heading}</h2>
                )}
                {firstContent && (
                    <div dangerouslySetInnerHTML={{ __html: firstContent }} className="text-article" />
                )}
            </div>
            {children && (
                children
            )}
            {secondContent && (
                <div dangerouslySetInnerHTML={{ __html: secondContent }} className="text-article" />
            )}
        </>
    )
}

export default NewsContent