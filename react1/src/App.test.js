importar  {  renderizar ,  pantalla  }  desde  '@testing-library/react' ;
importar la  aplicación  desde  './App' ;

test ( 'representa el enlace de aprendizaje de reacción' ,  ( )  =>  {
  renderizar ( < Aplicación  / > ) ;
  const  linkElement  =  pantalla . getByText ( / aprender reaccionar / i ) ;
  esperar ( linkElement ) . paraEstarEnElDocumento ( ) ;
} ) ;