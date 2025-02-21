import { useCallback, useMemo } from "react"

interface PagerProps {
    currentPage: number
    items: number
    pageSize: number
    onPageChange: (page: number) => void
}
export function Pager(props: PagerProps) {
    const pages = useMemo(() => {
        return Math.ceil(props.items / props.pageSize)
    }, [props.pageSize, props.items])

    const handlePreviousPage = useCallback(() => {
        if(props.currentPage > 0) props.onPageChange(props.currentPage-1)
        
    }, [props.currentPage])
    
    const handleNextPage = useCallback(() => {
        if(props.currentPage < pages-1) props.onPageChange(props.currentPage+1)
        
    }, [props.currentPage])
    

    return <div className="flex content-center">
        <div className="flex">
           {pages > 0 && <div className="page" onClick={handlePreviousPage}>{"<"}</div>}
            {Array.from({ length: pages }, (_, i) => i).map(page => 
                <div className={`page ${props.currentPage === page ? 'active-page' :''}`} onClick={() => props.onPageChange(page)}>{page+1}</div>
            )}
            {pages > 0 && <div className="page" onClick={handleNextPage}>{">"}</div>}
        </div>
    </div>
}