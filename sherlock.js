console.log("input"+INPUT);
INPUT =_INPUT.split("\n");

for(i=1; i<INPUT.lenght;i++)

  {
      A=INPUT[i].split(´ ´);
      B=A[0];
      C=A[1];
      
  conta=0;
  while (B<=C)
          {
                  if(B<0)
                          {
                                  console.log("no existen raices con signo negativo");
  break;
                          }
          else
                  {
                          Raiz=Math.sqrt(B);
                          if(Raiz % 1!=0)
                                  {
                                          B++;
                                  }else
                                        {
                                                  conta++;
                                                  B++;
                                        }
                  }
          }
  console.log(contador);
  }
