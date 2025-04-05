let products = [];
        let idCounter = 1;

        document.getElementById('productForm').addEventListener('submit', function(event) {
            event.preventDefault();
            let name = document.getElementById('name').value;
            let price = document.getElementById('price').value;
            let quantity = document.getElementById('quantity').value;
            
            let product = { id: idCounter++, name, price, quantity };
            products.push(product);
            updateTable();
            this.reset();
        });

        function updateTable() {
            let tableBody = document.getElementById('productTableBody');
            tableBody.innerHTML = '';
            products.forEach(product => {
                let row = `<tr>
                    <td>${product.id}</td>
                    <td contenteditable="true" oninput="updateProduct(${product.id}, 'name', this.innerText)">${product.name}</td>
                    <td contenteditable="true" oninput="updateProduct(${product.id}, 'price', this.innerText)">${product.price}</td>
                    <td contenteditable="true" oninput="updateProduct(${product.id}, 'quantity', this.innerText)">${product.quantity}</td>
                    <td><button onclick="deleteProduct(${product.id})">Eliminar</button></td>
                    <td><button onclick="editProduct(${product.id})">Editar</button></td>
                </tr>`;
                tableBody.innerHTML += row;
            });
        }


        function updateProduct(id, field, value) {
            let product = products.find(p => p.id === id);
            if (product) {
                product[field] = value;
            }
        }


        // Function to delete a product
        function deleteProduct(id) {
            products = products.filter(p => p.id !== id);
            updateTable();
        }