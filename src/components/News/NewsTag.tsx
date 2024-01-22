type TagProps = {
    tags: string[]
}

const NewsTag = ({tags}: TagProps) => {
  return (
    <div className="p-2 flex flex-col gap-4">
        <p className="destkop-sm text-[#778090]">Tags</p> 
        <div className="flex gap-x-[10px] gap-y-2 flex-wrap">
            {tags.map((tag, index) => {
                return (
                    <span key={index} className="destkop-sm font-medium p-2 bg-[#F8F8F8] rounded-full">{tag}</span>
                )
            })}
        </div>
    </div>
  )
}

export default NewsTag