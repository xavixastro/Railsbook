class CreateRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :requests do  |t|
      t.integer :user_id, null: false
      t.integer :requester_id, null: false
      t.timestamps
    end

    add_index :requests, [:user_id, :requester_id], unique: true
  end
end
