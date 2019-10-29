class CreateDirectories < ActiveRecord::Migration[6.0]
  def change
    create_table :directories do |t|
      t.string :company
      t.string :founder
      t.string :revenue
      t.string :logo
      t.timestamps
    end
  end
end
