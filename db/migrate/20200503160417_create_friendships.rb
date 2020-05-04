class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :userA, null: false
      t.integer :userB, null: false
      t.timestamps
    end

    add_index :friendships, [:userA, :userB]
    add_index :friendships, [:userB, :userA]

  end
end
