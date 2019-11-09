list = [9, 1, 2, 3, 4, 5, 6]

def insert_sort!(list)
    for i in 1..(list.length - 1)
        value = list[i]
        j = i - 1
        while j >= 0 and list[j] > value
            list[j + 1] = list[j] 
            j -= 1
        end
        list[j + 1] = value
    end
end

nums = insert_sort!(list)

nums.each do |num|
    puts num
end

