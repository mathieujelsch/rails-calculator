class CreateCalculators < ActiveRecord::Migration[7.0]
  def change
    create_table :calculators do |t|
      t.integer :chiffre

      t.timestamps
    end
  end
end
