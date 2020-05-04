json.friendship1 do 
    json.extract! @friendship1, :id, :userA, :userB
end

json.friendship2 do 
    json.extract! @friendship2, :id, :userA, :userB
end
