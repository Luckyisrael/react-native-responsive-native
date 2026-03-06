# React Native Responsive Native

A comprehensive responsive design utility for React Native to effortlessly scale your UI across different devices (phones and tablets) based on your original design dimensions.

## Features

- 📐 **Design-based scaling:** Scale sizes directly from your Figma/Sketch designs to any device screen.
- 📱 **Device targeting:** Easily apply different logic or styles for phones vs. tablets.
- 🖋️ **Font scaling:** Font sizes that respect device size and user accessibility settings.
- ⚖️ **Percentage mapping:** Convenient width and height percentages (`wp`, `hp`).
- 🔄 **TypeScript Support:** Written in TypeScript with full typing.

## Installation

```bash
npm install react-native-responsive-native
# or
yarn add react-native-responsive-native
```

## Setup

Initialize the library with your base design dimensions (e.g., your Figma frame size) as early as possible in your application (e.g., in `App.tsx` or `index.js`).

```typescript
import { setDesignSize } from 'react-native-responsive-native';

// Set your base design size (width, height) from Figma/Sketch
setDesignSize(390, 844);
```

## API Reference

### `setDesignSize(width: number, height: number)`
Sets the base dimensions for the scaling calculations. Default is `375x812`.

### `wp(percentage: number)` / `widthPercent`
Calculates the width based on a percentage of the screen width.
```typescript
width: wp(90) // 90% of screen width
```

### `hp(percentage: number)` / `heightPercent`
Calculates the height based on a percentage of the screen height.
```typescript
height: hp(10) // 10% of screen height
```

### `s(size: number)` / `scale`
Scales a value (e.g., padding, margin, width, height) proportionally from the design size to the current device size.
```typescript
padding: s(16)
gap: s(12)
```

### `f(size: number)` / `font`
Calculates responsive font size, taking both device size and the user's accessibility font scale preference into account.
```typescript
fontSize: f(16)
```

### `rv({ phone: X, tablet: Y })` / `responsiveValue`
Returns a value based on the current device type (phone or tablet).
```typescript
numColumns: rv({ phone: 2, tablet: 4 })
```

### `isPhone()` / `isTablet()`
Returns a boolean indicating the device type.
```typescript
flexDirection: isTablet() ? 'row' : 'column'
```

---

## Complete Storefront Example

```tsx
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { setDesignSize, wp, hp, s, f, rv, isTablet } from 'react-native-responsive-native';

// Initialize with your Figma frame design size
setDesignSize(390, 844);

const PRODUCTS = [
  { id: '1', name: 'T-Shirt', price: '$29.00', image: 'https://via.placeholder.com/150' },
  { id: '2', name: 'Hoodie', price: '$59.00', image: 'https://via.placeholder.com/150' },
  // ...
];

const ProductCard = ({ item }: { item: typeof PRODUCTS[0] }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.price}>{item.price}</Text>
  </TouchableOpacity>
);

export default function Storefront() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>STORE</Text>
        <TouchableOpacity style={styles.cart}>
          <Text style={styles.cartText}>Cart (2)</Text>
        </TouchableOpacity>
      </View>

      {/* Product Grid */}
      <FlatList
        data={PRODUCTS}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={item => item.id}
        numColumns={rv({ phone: 2, tablet: 4 })}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: wp(100),
    height: s(56),
    paddingHorizontal: s(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logo: {
    fontSize: f(20),
    fontWeight: '800',
    letterSpacing: 2,
  },
  cart: {
    padding: s(8),
  },
  cartText: {
    fontSize: f(14),
    fontWeight: '600',
  },
  list: {
    padding: s(16),
    gap: s(12),
  },
  row: {
    gap: s(12),
  },
  card: {
    width: rv({
      phone: wp(50) - s(22),     // 2 columns
      tablet: wp(25) - s(18),    // 4 columns
    }),
    marginBottom: s(12),
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: s(8),
    backgroundColor: '#f5f5f5',
  },
  name: {
    fontSize: f(14),
    fontWeight: '500',
    marginTop: s(8),
    marginBottom: s(4),
  },
  price: {
    fontSize: f(16),
    fontWeight: '700',
  },
});
```

---

## License

MIT
