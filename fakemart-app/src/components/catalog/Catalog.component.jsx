import CategoryItem from "../category-item/category-item.component";
import "./catalog.styles.scss"

const Catalog=({categories})=> {
    return (
        <div className="categories-container">
            {
              categories.map((category) => (
                <CategoryItem category={category} key={category.id}/>
              ))
            }
        </div>
    )
}


export default Catalog


