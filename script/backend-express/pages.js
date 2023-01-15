export const splitForPages = (products,count)=>{
    let arr = [];
    for (let i = 0; i < products.length; i += count) {
      let page = products.slice(i, i + count);
      arr.push(page);
    }
    return arr;
}