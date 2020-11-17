class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name,      null: false
      t.string :image_url, null: false
      t.string :slug,      null: false

      t.timestamps
    end
  end
end
