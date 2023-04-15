package main 

import (
	"fmt"
	"strings"
)

func WordCount(str string) map[string]int {
	counts := map [string]int{}
	for _, word := range strings.Fields(str){
		counts[word] ++
    }
	return counts 
}

func main (){
	str := "i read book"
	result := WordCount(str)
	fmt.PrintIn("Number of book:" , result["book"])
}