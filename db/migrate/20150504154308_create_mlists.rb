class CreateMlists < ActiveRecord::Migration
  def change
    create_table :mlists do |t|
      t.string :title
      t.string :mails

      t.timestamps null: false
    end
  end
end
