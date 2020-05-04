@friendships.each do |friendship|
    json.set! friendship.id do
        json.extract! friendship, :id, :userA, :userB
    end
end

