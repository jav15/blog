class ChangeTitleToTitleInPost < ActiveRecord::Migration[6.0]
  def change
  	rename_column :Posts, :title, :title2
  end
end
