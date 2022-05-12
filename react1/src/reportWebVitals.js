const  reportWebVitals  =  onPerfEntry  =>  {
    if  ( onPerfEntry  &&  onPerfEntry  instancia  de la función )  {
      importar ( 'web-vitals' ) . entonces ( ( { getCLS , getFID , getFCP , getLCP , getTTFB } )  =>  {
        getCLS ( onPerfEntry ) ;
        getFID ( onPerfEntry ) ;
        getFCP ( onPerfEntry ) ;
        getLCP ( onPerfEntry ) ;
        getTTFB ( onPerfEntry ) ;
      } ) ;
    }
  } ;
  
  exportar  reportWebVitals por defecto  ;