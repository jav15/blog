class ChangeTitle2ToTitleInPost < ActiveRecord::Migration[6.0]
  def change
  	rename_column :Posts, :title2, :title
  end
end
