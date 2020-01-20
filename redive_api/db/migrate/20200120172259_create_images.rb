class CreateImages < ActiveRecord::Migration[6.0]
  def change
    create_table :images do |t|
      t.string :title
      t.string :artist_name
      t.string :img_url
      t.string :img_type

      t.timestamps
    end
  end
end
