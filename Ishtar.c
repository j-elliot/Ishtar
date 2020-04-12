#include <stdio.h>
#include <string.h>

int main()
{
  char userIn[100];

  printf("Hello, human!\n");

  scanf("%s", userIn);
  
  char compStr[100] = "Hello";

  if(strcmp(userIn,compStr) == 0)
    {

      printf("How are you?\n");

    }else{

      printf("I didn't understand that.\n");

    }

  return 0;

}
