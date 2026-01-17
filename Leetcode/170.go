

type TwoSum struct {
	arr []int
}

func Constructor() TwoSum {
	return TwoSum{[]int{}}
}

func (this *TwoSum) Add(number int) {
	this.arr = append(this.arr, number)
}

func (this *TwoSum) Find(value int) bool {
	sort.Ints(this.arr)
	left, right := 0, len(this.arr)-1

	for left < right {
		if this.arr[left]+this.arr[right] < value {
			left++
		} else if this.arr[left]+this.arr[right] > value {
			right--
		} else {
			return true
		}
	}
	return false
}

func main() {
	twoSum := Constructor()
	twoSum.Add(1)
	twoSum.Add(3)
	twoSum.Add(5)
	fmt.Println(twoSum.Find(4))
	fmt.Println(twoSum.Find(7))
}
