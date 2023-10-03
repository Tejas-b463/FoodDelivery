


const ItemList = (items) =>{
    console.log(items);

    return(
       
      <div>
        {items.map((items) => (
        <div key={items.card.info.id}>
            <div>
            <h4>{items.card.info.name}</h4>
            <p>{items.card.info.price}</p>
            </div>
            <div>
                <p>{items.card.info.description}</p>
            </div>
        </div>
))}
      </div>
    )

}
export default ItemList;