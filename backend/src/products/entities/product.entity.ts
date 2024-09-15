import { Column, Model, Table, DataType } from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize';

@Table({ 
  tableName: 'Product', 
  createdAt: true, 
  updatedAt: true 
})
export class Product extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
    allowNull: false,
  })
  id: string;

  @Column({
    allowNull: false,
    unique: true,
  })
  name: string;

  @Column({
    type: DataType.FLOAT, // Assuming price is a floating point number
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.STRING, // Assuming category is a string
    allowNull: false,
  })
  category: string;

  @Column({
    type: DataType.FLOAT, // Assuming rating is a floating point number
    allowNull: true,
  })
  rating: number;
}
