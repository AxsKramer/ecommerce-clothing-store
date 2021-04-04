const initialState = {
  categories: [
    {
      title: 'men',
      imageUrl: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      size: 'large',
      id: 1,
      linkUrl: 'shop/Mens'
    },
    {
      title: 'women',
      imageUrl: 'https://images.pexels.com/photos/206434/pexels-photo-206434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      size: 'large',
      id: 2,
      linkUrl: 'shop/Womens'
    },
    {
      title: 'watches',
      imageUrl: 'https://images.pexels.com/photos/1034065/pexels-photo-1034065.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      id: 3,
      linkUrl: 'shop/Watches'
    },
    {
      title: 'hats',
      imageUrl: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      id: 4,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://images.pexels.com/photos/54206/pexels-photo-54206.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      id: 5,
      linkUrl: 'shop/Jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      id: 6,
      linkUrl: 'shop/Sneakers'
    },
    {
      title: 'glasses',
      imageUrl: 'https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      id: 7,
      linkUrl: 'shop/Glasses'
    },
    {
      title: 'shirts',
      imageUrl: 'https://images.pexels.com/photos/581087/pexels-photo-581087.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      id: 8,
      linkUrl: 'shop/Shirts'
    },
    {
      title: 'boots',
      imageUrl: 'https://images.pexels.com/photos/1834398/pexels-photo-1834398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      id: 9,
      linkUrl: 'shop/Boots'
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