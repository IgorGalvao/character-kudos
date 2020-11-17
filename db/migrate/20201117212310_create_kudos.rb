class CreateKudos < ActiveRecord::Migration[6.0]
  def change
    create_table :kudos do |t|
      t.references :sender,     null: false, foreign_key: { to_table: :characters }
      t.references :receiver,   null: false, foreign_key: { to_table: :characters }
      t.references :kudo_type,  null: false, foreign_key: true

      t.timestamps
    end
  end
end
