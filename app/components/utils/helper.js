
export const useBackgroundImage=(url,style)=>({backgroundImage:`url(${url})`,backgroundPosition:'center',
backgroundSize:'cover',backgroundRepeat:'no-repeat',...style})