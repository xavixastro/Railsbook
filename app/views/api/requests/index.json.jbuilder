@requests.each do |request|
    json.set! request.id do
        json.extract! request, :id, :user_id, :requester_id
    end
end