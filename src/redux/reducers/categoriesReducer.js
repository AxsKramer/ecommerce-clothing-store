const initialState = {
  categories: [
    {
      title: 'mens',
      imageUrl: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      size: 'large',
      id: 1,
      linkUrl: 'shop/mens'
    },
    {
      title: 'womens',
      imageUrl: 'https://images.pexels.com/photos/2762161/pexels-photo-2762161.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      size: 'large',
      id: 2,
      linkUrl: 'shop/womens'
    },
    {
      title: 'hats',
      imageUrl: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      id: 3,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://images.pexels.com/photos/54206/pexels-photo-54206.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      id: 4,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      id: 5,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'glasses',
      imageUrl: 'https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      id: 6,
      linkUrl: 'shop/glasses'
    },
    {
      title: 'shirts',
      imageUrl: 'https://images.pexels.com/photos/581087/pexels-photo-581087.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      id: 7,
      linkUrl: 'shop/shirts'
    },
    {
      title: 'boots',
      imageUrl: 'https://images.pexels.com/photos/4992763/pexels-photo-4992763.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      id: 8,
      linkUrl: 'shop/boots'
    },    
  ]
};

const categoriesReducer = (state = initialState, action) => {
  switch(action.type){
    default:
      return state;
  }
}

export default categoriesReducer;