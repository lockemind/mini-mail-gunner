class AddUserRefToMlists < ActiveRecord::Migration
  def change
    add_reference :mlists, :user, index: true, foreign_key: true
  end
end
