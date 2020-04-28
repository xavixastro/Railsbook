class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.integer :owner_id, null: false
      t.string :current_city
      t.string :hometown
      t.text :about
      t.string :workplace
      t.string :education
      t.timestamps
    end

    add_index :profiles, :owner_id, unique: true
  end
end
