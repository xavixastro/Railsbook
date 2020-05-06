class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :profile_id, null: false
      t.integer :author_id, null: false
      t.text :content, null: false
      t.timestamps
    end

    add_index :posts, :profile_id
    add_index :posts, :author_id
  end
end
