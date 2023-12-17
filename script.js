// const data=[
//     {
//         title: "card 1",
//         body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, placeat!"
//     },
//     {
//         title: "card 2",
//         body: "Lorem ipsum dolor fdg dfg fdg fsd aaf sit amet consectetur adipisicing elit. Dolorum, placeat!"
//     },
//     {
//         title: "card 3",
//         body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, placeat gfh ghgff sdfr jh!"
//     },
//     {
//         title: "card 4",
//         body: "Loremh gfh  fgjf fgfd ipsum dolor sit amet consectetur adipisicing elit. Dolorum, placeat!"
//     },
//     {
//         title: "card 5",
//         body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,  54 f s yt h hjh placeat!"
//     },
//     {
//         title: "card 6",
//         body: "Lorem ipsum jhgj  hgj  hjg hjg dolor sit amet consectetur adipisicing elit. Dolorum, placeat!"
//     },
//     {
//         title: "card 7",
//         body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,  hj hgj gd klk klj placeat!"
//     },
//     {
//         title: "card 8",
//         body: "Lorem fghfgh dfg  ipsum dolor sit amet consectetur adipisicing elit. Dolorum, placeat!"
//     }
// ]

const fetchData=async()=>{
    try{
        const res= await axios("https://jsonplaceholder.typicode.com/posts");
        return res.data;
    } catch(err){
        throw Error("Not fetched");
    }
       
    
    
}



let cards=document.querySelector(".cards");
console.log(cards);

const loadData=async()=>{
    const resData=await fetchData();
    resData.map((post)=>{
        let card=document.createElement("div");
        card.classList.add("card");
        card.innerHTML=`
        <h3 class="title">${post.title}</h3>
        <p class="body">${post.body}</p>
            `
        cards.appendChild(card);
    })
}
loadData();