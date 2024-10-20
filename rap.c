#include <stdio.h>
#include <stdlib.h>
#include <sys/shm.h>
#include <string.h>
#include <sys/ipc.h>



int main() {

    int m;
    int o;
    int data;

    m = 0;
    o = 20;
    data = m + o;
    printf("%d\n",data);

    return 0;
}
