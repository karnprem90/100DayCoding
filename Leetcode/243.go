func shortestDistance(wordsDict []string, word1 string, word2 string) int {
	min := len(wordsDict)
	index1 := -1
	index2 := -1
	for i := 0; i < len(wordsDict); i++ {
		if wordsDict[i] == word1 {
			index1 = i
		} else if wordsDict[i] == word2 {
			index2 = i
		}
		if index1 != -1 && index2 != -1 {
			abs := math.Abs(float64(index1 - index2))
			min = int(math.Min(float64(min), abs))
		}
	}
	return min
}